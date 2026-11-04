import {
  FaShoppingBag, FaCashRegister, FaHandshake, FaTruck, FaWarehouse, FaIndustry, FaBook, FaWallet, FaBullseye,
  FaComments, FaWhatsapp, FaBullhorn, FaCalendarAlt, FaLink, FaChartBar, FaSearch, FaUsers, FaFingerprint,
  FaCheck, FaTimes, FaStore, FaStethoscope, FaHospital, FaBriefcase, FaBoxes, FaHome, FaShareAlt, FaAd, FaGlobe,
  FaNewspaper, FaFileAlt, FaEnvelope, FaUserFriends, FaLayerGroup, FaShieldAlt, FaLock, FaRupeeSign, FaUndo,
  FaClock, FaSync, FaPrint, FaBarcode, FaPills, FaCreditCard, FaStar, FaPenFancy, FaTags, FaBalanceScale,
  FaPaperPlane, FaHistory, FaDatabase, FaBell, FaEye, FaFilter, FaPlug, FaMagic, FaUserCheck, FaCogs,
  FaClipboardList, FaChartLine, FaQrcode, FaIdCard, FaKey, FaRoute, FaMapMarkerAlt, FaCalculator, FaCoins,
  FaPiggyBank, FaFileInvoice, FaUniversity, FaRocket, FaBoxOpen, FaExclamationCircle, FaTachometerAlt, FaImage,
  FaVideo, FaPalette, FaMousePointer, FaPercent, FaHashtag, FaWifi, FaThLarge, FaColumns, FaCodeBranch,
  FaUser, FaPhoneAlt, FaCode, FaMobileAlt, FaHeadset, FaBoxOpen as FaPackage,
} from "react-icons/fa";

/**
 * The data files name icons with short keys ("book", "truck"); the original site's sections render
 * Font Awesome components. This maps one onto the other so new pages look like the old ones.
 */
const MAP = {
  bag: FaShoppingBag, receipt: FaCashRegister, handshake: FaHandshake, truck: FaTruck, warehouse: FaWarehouse,
  factory: FaIndustry, book: FaBook, wallet: FaWallet, target: FaBullseye, messages: FaComments, chat: FaWhatsapp,
  megaphone: FaBullhorn, calendar: FaCalendarAlt, link: FaLink, chart: FaChartBar, search: FaSearch, users: FaUsers,
  fingerprint: FaFingerprint, check: FaCheck, x: FaTimes, store: FaStore, stethoscope: FaStethoscope,
  hospital: FaHospital, briefcase: FaBriefcase, boxes: FaBoxes, house: FaHome, share: FaShareAlt, ad: FaAd,
  globe: FaGlobe, news: FaNewspaper, file: FaFileAlt, mail: FaEnvelope, friends: FaUserFriends, layers: FaLayerGroup,
  shield: FaShieldAlt, lock: FaLock, rupee: FaRupeeSign, undo: FaUndo, clock: FaClock, refresh: FaSync,
  printer: FaPrint, barcode: FaBarcode, scan: FaBarcode, pill: FaPills, card: FaCreditCard, star: FaStar,
  pen: FaPenFancy, penTool: FaPenFancy, tag: FaTags, scale: FaBalanceScale, send: FaPaperPlane, history: FaHistory,
  database: FaDatabase, bell: FaBell, eye: FaEye, filter: FaFilter, plug: FaPlug, sparkles: FaMagic,
  userCheck: FaUserCheck, workflow: FaCogs, clipboard: FaClipboardList, checks: FaClipboardList, trend: FaChartLine,
  line: FaChartLine, qr: FaQrcode, idcard: FaIdCard, key: FaKey, route: FaRoute, pin: FaMapMarkerAlt,
  calculator: FaCalculator, coins: FaCoins, piggy: FaPiggyBank, fileCheck: FaFileInvoice, bank: FaUniversity,
  rocket: FaRocket, box: FaBoxOpen, package: FaPackage, packageCheck: FaBoxOpen, alert: FaExclamationCircle,
  gauge: FaTachometerAlt, image: FaImage, video: FaVideo, palette: FaPalette, click: FaMousePointer,
  badgePercent: FaPercent, percent: FaPercent, hash: FaHashtag, offline: FaWifi, grid: FaThLarge,
  dashboard: FaColumns, kanban: FaColumns, branch: FaCodeBranch, user: FaUser, phone: FaPhoneAlt, code: FaCode,
  monitor: FaGlobe, phoneDevice: FaMobileAlt, headphones: FaHeadset, message: FaComments, copy: FaFileAlt,
  cash: FaRupeeSign, ok: FaCheck, zap: FaMagic, timer: FaClock, map: FaMapMarkerAlt, building: FaHospital,
};

export const faIcon = (key) => MAP[key] || FaCheck;

/** One colourful gradient per product family  the original site's icon-tile style. */
export const GROUP_COLORS = {
  sell: "from-orange-500 to-red-600",
  operate: "from-blue-500 to-cyan-600",
  money: "from-green-500 to-emerald-600",
  growth: "from-purple-500 to-pink-600",
  insight: "from-indigo-500 to-blue-600",
  team: "from-teal-500 to-cyan-600",
};
