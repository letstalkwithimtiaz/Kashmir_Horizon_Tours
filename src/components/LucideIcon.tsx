import { 
  Hotel, 
  Ship, 
  Car, 
  PlaneTakeoff, 
  Compass, 
  Mountain, 
  Briefcase, 
  Users,
  Phone,
  MessageCircle,
  Calendar,
  Clock,
  MapPin,
  Check,
  X,
  Star,
  ChevronDown,
  ChevronDown as ChevronDownIcon, // alias
  ChevronRight,
  Menu,
  XCircle,
  Award,
  Shield,
  Heart,
  Grid,
  Filter,
  Camera,
  Search,
  ExternalLink,
  ChevronLeft,
  Mail,
  Sliders,
  Send,
  Zap,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

export const iconsMap = {
  Hotel,
  Ship,
  Car,
  PlaneTakeoff,
  Compass,
  Mountain,
  Briefcase,
  Users,
  Phone,
  MessageCircle,
  Calendar,
  Clock,
  MapPin,
  Check,
  X,
  Star,
  ChevronDown,
  ChevronRight,
  Menu,
  XCircle,
  Award,
  Shield,
  Heart,
  Grid,
  Filter,
  Camera,
  Search,
  ExternalLink,
  ChevronLeft,
  Mail,
  Sliders,
  Send,
  Zap,
  CheckCircle,
  AlertCircle
};

export type IconName = keyof typeof iconsMap;

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function LucideIcon({ name, className = "", size = 24 }: LucideIconProps) {
  // Safe lookup: Default to Compass if not found
  const IconComponent = iconsMap[name as keyof typeof iconsMap] || Compass;
  return <IconComponent className={className} size={size} />;
}
