# 🌐 URL Shortener

Welcome to the **URL Shortener** project! 🚀 This full-stack application lets you shorten URLs, manage them, and track detailed statistics. It's built using **React**, **Tailwind CSS**, **Supabase**, and **Shadcn UI**.

## Features

- ✂️ **URL Shortening**: Convert long URLs into short, manageable links.
- 🔒 **User Authentication**: Secure sign-up and login with Supabase.
- 📊 **Dashboard**: View your shortened URLs and click stats.
- 📈 **Detailed Stats**: Get insights into where your clicks are coming from and which devices are being used.
- 🖼️ **QR Code Generation**: Generate and download QR codes for your links.
- 🔐 **Protected Routes**: Secure access to your dashboard and link management.
- 📱 **Responsive Design**: Works beautifully on both mobile and desktop.

## How URL Shortening Works

1. **Generate Random Short URLs**: By default, the app generates a unique, random string to append to your domain, creating a shortened URL.

2. **Custom URLs**: Users can also create custom short URLs if the desired custom link is available and not already taken by another user.

3. **Database Storage**: Both the original and short URLs are stored in the Supabase database.

4. **Redirection**: When a user accesses the short URL, the app retrieves the original URL from the database and redirects the user to it.

5. **Click Tracking**: Each time a short URL is accessed, a click event is recorded, tracking the user's location, device, and time of access.

```

```
