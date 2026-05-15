# Read from the file file.txt and output the tenth line to stdout.

# # Solution 1: using sed
# sed -n '10p' file.txt

# # Solution 2: using awk
# awk 'NR==10' file.txt

# Solution 3: using tail + head
tail -n +10 file.txt | head -n 1

# Synced seamlessly with LeetHub Pro
# Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
# Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna