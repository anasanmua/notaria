"use client";
import React, { useState, useEffect } from "react";
import { Modal, Button, Typography, Space, Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";

const { Text, Title } = Typography;

interface CookieSettings {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [settings, setSettings] = useState<CookieSettings>({
    essential: true, // Essential cookies are always required
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already given consent
    const hasConsent = localStorage.getItem("cookieConsent");
    if (!hasConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allSettings = {
      essential: true,
      analytics: true,
      marketing: true,
    };
    localStorage.setItem("cookieConsent", "true");
    localStorage.setItem("cookieSettings", JSON.stringify(allSettings));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookieConsent", "true");
    localStorage.setItem("cookieSettings", JSON.stringify(settings));
    setIsVisible(false);
  };

  const handleDeclineAll = () => {
    const minimalSettings = {
      essential: true,
      analytics: false,
      marketing: false,
    };
    localStorage.setItem("cookieConsent", "false");
    localStorage.setItem("cookieSettings", JSON.stringify(minimalSettings));
    setIsVisible(false);
  };

  const handleSettingChange =
    (key: keyof CookieSettings) => (e: CheckboxChangeEvent) => {
      if (key === "essential") return; // Essential cookies cannot be disabled
      setSettings((prev) => ({
        ...prev,
        [key]: e.target.checked,
      }));
    };

  return (
    <Modal
      title={<Title level={4}>Cookie Settings</Title>}
      open={isVisible}
      closable={false}
      maskClosable={false}
      footer={[
        <Button key="decline" onClick={handleDeclineAll}>
          Decline All
        </Button>,
        <Button key="save" type="default" onClick={handleSavePreferences}>
          Save Preferences
        </Button>,
        <Button key="accept" type="primary" onClick={handleAcceptAll}>
          Accept All
        </Button>,
      ]}
      width={600}
    >
      <Space direction="vertical" size="middle" style={{ width: "100%" }}>
        <Text>
          We use cookies to enhance your browsing experience and improve our
          website. Please choose your cookie preferences below.
        </Text>

        <Space direction="vertical" style={{ width: "100%" }}>
          <div>
            <Checkbox checked={settings.essential} disabled>
              <Text strong>Essential Cookies</Text>
            </Checkbox>
            <Text type="secondary" style={{ marginLeft: 24 }}>
              These cookies are necessary for the website to function properly
              and cannot be disabled.
            </Text>
          </div>

          <div>
            <Checkbox
              checked={settings.analytics}
              onChange={handleSettingChange("analytics")}
            >
              <Text strong>Analytics Cookies</Text>
            </Checkbox>
            <Text type="secondary" style={{ marginLeft: 24 }}>
              Help us understand how visitors interact with our website.
            </Text>
          </div>

          <div>
            <Checkbox
              checked={settings.marketing}
              onChange={handleSettingChange("marketing")}
            >
              <Text strong>Marketing Cookies</Text>
            </Checkbox>
            <Text type="secondary" style={{ marginLeft: 24 }}>
              Used to deliver personalized advertisements and track their
              performance.
            </Text>
          </div>
        </Space>
      </Space>
    </Modal>
  );
};

export default CookieConsent;
