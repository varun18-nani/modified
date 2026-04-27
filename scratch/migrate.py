from backend.database import engine
from sqlalchemy import text
import sys

def migrate():
    try:
        with engine.connect() as conn:
            print("Checking for completed_skills column...")
            # PostgreSQL syntax for adding column if not exists is a bit complex in older versions, 
            # but usually we can just try and catch.
            try:
                conn.execute(text("ALTER TABLE users ADD COLUMN completed_skills JSON DEFAULT '[]'::json"))
                conn.commit()
                print("Added completed_skills column.")
            except Exception as e:
                if "already exists" in str(e).lower():
                    print("Column already exists.")
                else:
                    print(f"Error adding column: {e}")
                    
            print("Migration complete.")
    except Exception as e:
        print(f"Failed to connect to database: {e}")
        sys.exit(1)

if __name__ == "__main__":
    migrate()
