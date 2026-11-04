
// IMAGE MODAL COMPONENT (for zooming in)
const ImageModal = ({ src, isOpen, onClose }) => (
    <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center p-4 cursor-zoom-out backdrop-blur-sm"
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        onClick={onClose}
                        className="absolute -top-12 right-0 text-white hover:text-orange-500 transition-colors bg-white/10 p-2 rounded-full backdrop-blur-md"
                    >
                        <LuX size={32} />
                    </button>
                    <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border border-gray-800">
                        <Image
                            src={src}
                            alt="Full View"
                            fill
                            className="object-contain"
                            quality={100}
                        />
                    </div>
                </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
);
