# Stakeholder Requirements (as received)

From: Product Manager
Subject: File organizer tool

"We need a tool that organizes files in a directory. It should sort them into folders by type — like images go in an images folder, documents in docs, etc. It should work on Mac and Linux. Oh and it should handle duplicates somehow — maybe rename them? Or skip them? Whatever makes sense. It should be fast. And it should show what it did when it's done. Sarah mentioned she wants it to work on her Downloads folder which has like 10,000 files."

From: Sarah (User)
"I just want to clean up my Downloads folder without losing anything. I'm scared of tools that delete files."

From: Engineering Lead
"Make sure it handles symlinks correctly and doesn't follow them into system directories. Also it needs to be idempotent — running it twice shouldn't create images/images/."
