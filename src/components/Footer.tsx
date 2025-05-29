
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-blue-400 mb-4">
              vinaka.ai
            </div>
            <p className="text-gray-400 leading-relaxed">
              Empowering B2B customer support teams with AI-native solutions that transform customer experiences.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Integrations</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">API</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Security</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-200">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Status</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 vinaka.ai. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
