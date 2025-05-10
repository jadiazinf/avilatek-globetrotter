"use client";

import { Button } from "@heroui/button";
import { Modal, ModalBody, ModalContent, useDisclosure } from "@heroui/modal";
import { useTranslations } from "next-intl";

import { AppLanguageMessages } from "@/i18n/types";

type Props = {
  radius?: "sm" | "full";
  variant?: "solid" | "bordered";
  size?: "md" | "lg";
};

export function BookFlightModalButton(props: Props) {
  const { radius = "sm", variant = "solid", size = "md" } = props;

  const t = useTranslations();

  const { isOpen, onClose, onOpenChange, onOpen } = useDisclosure();

  return (
    <>
      <Modal
        className="p-5"
        isOpen={isOpen}
        radius="sm"
        onOpenChange={onOpenChange}
      >
        <ModalBody>
          <ModalContent>
            <p>Booking form</p>
          </ModalContent>
        </ModalBody>
      </Modal>
      <Button color="primary" radius={radius} size={size} variant={variant}>
        {t(AppLanguageMessages.components.bookings.book)}
      </Button>
    </>
  );
}
