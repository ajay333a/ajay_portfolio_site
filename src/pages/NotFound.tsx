import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-4">
      <div className="glass-panel p-8 sm:p-12 text-center max-w-md w-full">
        <div className="text-6xl font-extrabold text-gradient mb-2">404</div>
        <h1 className="text-2xl font-bold text-foreground mb-3">Page Not Found</h1>
        <p className="text-sm text-muted-foreground mb-8">
          The requested page <code className="text-primary">{location.pathname}</code> does not exist or has been relocated.
        </p>
        <Link to="/" className="btn-primary w-full justify-center">
          <Home size={16} />
          <span>Return to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
