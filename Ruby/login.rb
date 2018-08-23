puts "Welcome To Rubogin, The #1 Ruby Built Login Page"
puts "Please Enter Your Credentials:"
print "Username: "
username = gets.chomp
print "Password: "
password = gets.chomp

attempts = 0

if username == "bob" && password == "abc"
    print "Welcome, #{username}, #{password}\r\n"
elsif username == ""
    puts "Error 01: Username Input Is Blank"
    attempts = attempts + 1
elsif password == ""
    puts "Error 02: Password Input Is Blank"
    attempts = attempts + 1
else
    puts "Error 03: Incorrect Credentials\r\n"
    print "You Will Be Locked Out!"
    attempts = attempts + 1
end
if attempts == 0
     print "Secret Text"
else
    
end