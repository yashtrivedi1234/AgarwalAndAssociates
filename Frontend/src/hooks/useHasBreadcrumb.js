import { useLocation } from "react-router-dom";

export function useHasBreadcrumb() {
  const location = useLocation();
  // List of routes where Breadcrumb is used (add more as needed)
  const breadcrumbRoutes = [
    "/about/our-team", "/projects", "/services", "/gallery", "/testimonials", "/blog", "/contact", "/privacy-policy", "/team", "/project-detail"
  ];
  // Special handling for dynamic project detail route
  if (/^\/project\/.+/.test(location.pathname)) {
    return true;
  }
  return breadcrumbRoutes.some(route => location.pathname.startsWith(route));
}
