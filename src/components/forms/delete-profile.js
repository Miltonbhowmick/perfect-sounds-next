"use client";

import { useState } from "react";
import ButtonGradiend from "../button/gradient";
import VerifyPasswordModal from "../modal/verify-password";

export default function DeleteProfileModal({}) {
  const [showVerifyPasswordModal, setShowVerifyPasswordModal] = useState(false);

  return (
    <>
      <ButtonGradiend
        onClick={() => setShowVerifyPasswordModal(true)}
        className="mt-5 px-5 h-[35px] md:h-[45px] lg:h-[55px] w-max rounded-lg"
        gradient
      >
        <h6 className="text-primaryText font-medium">Delete Account</h6>
      </ButtonGradiend>
      {showVerifyPasswordModal && (
        <VerifyPasswordModal
          showModal={showVerifyPasswordModal}
          hideModal={setShowVerifyPasswordModal}
          mode={"deleteProfile"}
        />
      )}
    </>
  );
}
