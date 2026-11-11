import React from "react";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const VendorCard = ({ vendor }) => {
  const navigate = useNavigate();

  if (!vendor) return null;

  /*
    IMPORTANT:
    Images are already inside public/.

    Example:
    public/Golden Hour Pre-Wedding Celebration.png

    Correct browser path:
    /Golden%20Hour%20Pre-Wedding%20Celebration.png

    We automatically convert spaces into URL-safe paths.
  */
  const getImagePath = (image) => {
    if (!image) return "";

    // If image is already a complete URL
    if (
      image.startsWith("http://") ||
      image.startsWith("https://") ||
      image.startsWith("data:")
    ) {
      return image;
    }

    // Remove starting slash if present
    const cleanImage = image.replace(/^\/+/, "");

    // Encode spaces and special characters correctly
    return "/" + encodeURI(cleanImage);
  };

  const imagePath = getImagePath(
    vendor.image ||
      vendor.imageUrl ||
      vendor.image_url ||
      vendor.photo ||
      vendor.img
  );

  const handleViewProfile = () => {
    navigate(`/vendor/${vendor.id}`);
  };

  return (
    <div
      className="
        group
        w-full
        max-w-[405px]
        overflow-hidden
        rounded-[20px]
        border
        border-[#f1d9df]
        bg-white
        shadow-[0_8px_25px_rgba(42,15,20,0.06)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_16px_35px_rgba(42,15,20,0.12)]
      "
    >

      {/* ================= IMAGE ================= */}
      <div className="relative h-[245px] w-full overflow-hidden bg-[#f8eee9]">

        {imagePath ? (
          <img
            src={imagePath}
            alt={vendor.name || "Vendor"}
            className="
              block
              h-full
              w-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
            onError={(e) => {
              console.error("Vendor image not found:", imagePath);
            }}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-[#9b858b]">
            Image not available
          </div>
        )}

      </div>

      {/* ================= CONTENT ================= */}
      <div className="p-5">

        {/* PRICE + LOCATION */}
        <div className="mb-3 flex items-center justify-between gap-3">

          <div>
            <span className="text-[18px] font-bold text-[#2A0F14]">
              {vendor.price}
            </span>

            {vendor.priceLabel && (
              <span className="ml-1 text-[14px] text-[#8d777c]">
                {vendor.priceLabel}
              </span>
            )}
          </div>

          {vendor.location && (
            <div className="flex items-center gap-1 text-[14px] text-[#8d777c]">
              <MapPin
                size={16}
                strokeWidth={2}
                className="text-[#D6174F]"
              />

              <span>{vendor.location}</span>
            </div>
          )}

        </div>

        {/* CATEGORY */}
        {vendor.category && (
          <p
            className="
              mb-2
              text-[13px]
              font-bold
              uppercase
              tracking-[1.2px]
              text-[#D6174F]
            "
          >
            {vendor.category}
          </p>
        )}

        {/* NAME */}
        <h3
          className="
            mb-2
            line-clamp-1
            text-[20px]
            font-bold
            text-[#2A0F14]
          "
        >
          {vendor.name}
        </h3>

        {/* DESCRIPTION */}
        {vendor.description && (
          <p
            className="
              mb-5
              line-clamp-2
              min-h-[48px]
              text-[15px]
              leading-6
              text-[#8d777c]
            "
          >
            {vendor.description}
          </p>
        )}

        {/* BUTTONS */}
        <div className="flex gap-3">

          {/* SEND INQUIRY */}
          <button
            type="button"
            className="
              flex-1
              rounded-full
              bg-gradient-to-r
              from-[#D6174F]
              to-[#F26A2E]
              px-4
              py-3
              text-[14px]
              font-bold
              text-white
              shadow-[0_6px_18px_rgba(214,23,79,0.18)]
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:shadow-[0_8px_22px_rgba(214,23,79,0.28)]
            "
          >
            Send Inquiry
          </button>

          {/* VIEW PROFILE */}
          <button
            type="button"
            onClick={handleViewProfile}
            className="
              flex-1
              rounded-full
              border
              border-[#f2dcc8]
              bg-[#fff7ed]
              px-4
              py-3
              text-[14px]
              font-bold
              text-[#2A0F14]
              transition-all
              duration-300
              hover:border-[#D6174F]
              hover:bg-[#fff0e4]
              hover:text-[#D6174F]
            "
          >
            View Profile
          </button>

        </div>

      </div>
    </div>
  );
};

export default VendorCard;