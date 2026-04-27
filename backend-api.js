const API_URL = "https://studentcareerroadmapplatform.onrender.com";




class API {
    constructor() {
        this.token = localStorage.getItem('token');
        this.user = null;
        this.onAuthListeners = [];
    }

    async register(email, password, fullName) {
        const res = await fetch(`${API_URL}/api/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, full_name: fullName })
        });
        if (!res.ok) throw new Error(await res.text());
        return res.json();
    }

    async login(email, password) {
        const formData = new FormData();
        formData.append('username', email);
        formData.append('password', password);

        const res = await fetch(`${API_URL}/api/auth/token`, {
            method: 'POST',
            body: formData
        });
        
        if (!res.ok) {
            if (res.status === 401) throw new Error('Invalid email or password');
            if (res.status === 405 || res.status === 404) {
                throw new Error(`API Error: The backend server is not reachable at ${API_URL}. If you are on GitHub Pages, the backend must be hosted separately.`);
            }
            throw new Error('Server error. Please make sure the backend is running.');
        }
        
        const data = await res.json();

        this.token = data.access_token;
        localStorage.setItem('token', this.token);
        await this.checkAuth();
        return data;
    }

    async logout() {
        this.token = null;
        this.user = null;
        localStorage.removeItem('token');
        this._notifyAuth(null);
    }

    async checkAuth() {
        if (!this.token) {
            this._notifyAuth(null);
            return null;
        }
        try {
            const res = await fetch(`${API_URL}/api/user/progress`, {
                headers: { 'Authorization': `Bearer ${this.token}` }
            });
            if (res.ok) {
                const data = await res.json();
                this.user = data;
                this._notifyAuth(data);
                return data;
            } else {
                this.logout();
                return null;
            }
        } catch (e) {
            console.error("Auth check failed", e);
            this._notifyAuth(null);
            return null;
        }
    }

    onAuthStateChanged(callback) {
        this.onAuthListeners.push(callback);
        // Immediate check
        this.checkAuth();
    }

    _notifyAuth(user) {
        this.onAuthListeners.forEach(cb => cb(user));
    }

    async saveScore(courseId, moduleIndex, score) {
        const res = await fetch(`${API_URL}/api/test/save`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`
            },
            body: JSON.stringify({ course_id: courseId, module_index: moduleIndex, score })
        });
        return res.json();
    }

    async saveSchedule(courseId, schedule) {
        const res = await fetch(`${API_URL}/api/schedule/save`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`
            },
            body: JSON.stringify({ course_id: courseId, items: schedule })
        });
        return res.json();
    }

    async updateProfile(data) {
        const res = await fetch(`${API_URL}/api/user/profile`, {
            method: 'PATCH',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`
            },
            body: JSON.stringify(data)
        });
        return res.json();
    }

    async saveVideoProgress(videoId, time) {
        if (!this.user) return;
        const progress = this.user.videoProgress || {};
        progress[videoId] = time;
        return this.updateProfile({ video_progress: progress });
    }

    async uploadAvatar(file) {
        const formData = new FormData();
        formData.append('file', file);
        const res = await fetch(`${API_URL}/api/upload`, {
            method: 'POST',
            headers: { 
                'Authorization': `Bearer ${this.token}`
            },
            body: formData
        });
        return res.json();
    }
}

export const api = new API();
export { API_URL };

