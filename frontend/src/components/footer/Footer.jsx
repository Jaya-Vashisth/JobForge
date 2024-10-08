const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-6 shadow-t-lg fixed bottom-0 left-0 w-full">
      <div className="sm:container mx-auto text-center md:flex items-center justify-around">
        <p>
          &copy; 2024 JobForge. <br /> All Rights Reserved.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="/privacy-policy"
            className="text-gray-600 hover:text-gray-800"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="text-gray-600 hover:text-gray-800"
          >
            Terms of Service
          </a>
        </div>
        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <svg
              className="w-6 h-6 text-gray-600 hover:text-gray-800"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.918 4.918 0 00-8.384 4.482C7.688 8.094 4.064 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475 4.918 4.918 0 002.188 4.1 4.9 4.9 0 01-2.228-.616v.061a4.918 4.918 0 003.946 4.827 4.902 4.902 0 01-2.224.085 4.918 4.918 0 004.6 3.417 9.864 9.864 0 01-6.102 2.105c-.396 0-.788-.023-1.175-.068a13.95 13.95 0 007.557 2.212c9.054 0 14.004-7.498 14.004-13.985 0-.213-.005-.425-.014-.637A10.025 10.025 0 0024 4.557z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg
              className="w-6 h-6 text-gray-600 hover:text-gray-800"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.335 3.608 1.31.974.975 1.247 2.243 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.335 2.633-1.31 3.608-.975.974-2.242 1.247-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.335-3.608-1.31-.974-.975-1.247-2.243-1.31-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.335-2.633 1.31-3.608.975-.974 2.242-1.247 3.608-1.31 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.422.065-2.688.334-3.728 1.374-1.04 1.039-1.309 2.306-1.374 3.728-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.065 1.422.334 2.688 1.374 3.728 1.039 1.04 2.306 1.309 3.728 1.374 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.422-.065 2.688-.334 3.728-1.374 1.04-1.039 1.309-2.306 1.374-3.728.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.065-1.422-.334-2.688-1.374-3.728-1.039-1.04-2.306-1.309-3.728-1.374-1.28-.058-1.688-.072-4.947-.072zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <svg
              className="w-6 h-6 text-gray-600 hover:text-gray-800"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.351C0 23.406.593 24 1.324 24H12.81V14.706H9.691v-3.621h3.118V8.299c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.464.098 2.795.142v3.24l-1.918.001c-1.503 0-1.795.715-1.795 1.762v2.31h3.589l-.467 3.621h-3.122V24h6.116c.731 0 1.324-.593 1.324-1.324V1.324C24 .593 23.406 0 22.676 0z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
