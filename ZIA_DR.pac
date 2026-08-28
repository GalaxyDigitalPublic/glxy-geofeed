function FindProxyForURL(url, host)
{
  host = host.toLowerCase();
  //
  // Bypass proxy for Galaxy Digital and related domains
  // NOTE: localHostOrDomainIs() does NOT match subdomains - apex + "*." pairs required
  //
  if (
    shExpMatch(host, "contactgfm.com") ||
    shExpMatch(host, "*.contactgfm.com") ||
    shExpMatch(host, "g2d2.io") ||
    shExpMatch(host, "*.g2d2.io") ||
    shExpMatch(host, "galaxy.app") ||
    shExpMatch(host, "*.galaxy.app") ||
    shExpMatch(host, "galaxy.com") ||
    shExpMatch(host, "*.galaxy.com") ||
    shExpMatch(host, "galaxydigital.ca") ||
    shExpMatch(host, "*.galaxydigital.ca") ||
    shExpMatch(host, "galaxydigital.io") ||
    shExpMatch(host, "*.galaxydigital.io") ||
    shExpMatch(host, "galaxydigital.services") ||
    shExpMatch(host, "*.galaxydigital.services") ||
    shExpMatch(host, "galaxyfundmanagement.com") ||
    shExpMatch(host, "*.galaxyfundmanagement.com") ||
    shExpMatch(host, "galaxyinteractive.io") ||
    shExpMatch(host, "*.galaxyinteractive.io") ||
    shExpMatch(host, "galaxyip.com") ||
    shExpMatch(host, "*.galaxyip.com") ||
    shExpMatch(host, "galaxy.shop") ||
    shExpMatch(host, "*.galaxy.shop") ||
    shExpMatch(host, "galaxytest.io") ||
    shExpMatch(host, "*.galaxytest.io") ||
    shExpMatch(host, "gdt.exchange") ||
    shExpMatch(host, "*.gdt.exchange") ||
    shExpMatch(host, "gdtexchange.com") ||
    shExpMatch(host, "*.gdtexchange.com") ||
    shExpMatch(host, "gdtrading.io") ||
    shExpMatch(host, "*.gdtrading.io") ||
    shExpMatch(host, "gfmcryptocademy.com") ||
    shExpMatch(host, "*.gfmcryptocademy.com") ||
    shExpMatch(host, "glxy.com") ||
    shExpMatch(host, "*.glxy.com") ||
    shExpMatch(host, "glxy.net") ||
    shExpMatch(host, "*.glxy.net") ||
    shExpMatch(host, "visionhill.com") ||
    shExpMatch(host, "*.visionhill.com")
  ) {
    return "DIRECT";
  }

  //
  // ZPA connectivity is required for Zscaler DR - private IP range belongs to ZPA
  //
  if (isInNet(host, "100.64.0.0", "255.255.0.0")) {
    return "DIRECT";
  }

  //
  // ZPA control plane domains - required by Zscaler DR documentation
  //
  if (
    shExpMatch(host, "zpath.net") ||
    shExpMatch(host, "*.zpath.net")
  ) {
    return "DIRECT";
  }

  //
  // Third party allowlist for ZIA DR
  //
  if (
    shExpMatch(host, "usequark.xyz") ||
    shExpMatch(host, "*.usequark.xyz") ||
    shExpMatch(host, "netsuite.com") ||
    shExpMatch(host, "*.netsuite.com") ||
    shExpMatch(host, "artemisxyz.com") ||
    shExpMatch(host, "*.artemisxyz.com") ||
    shExpMatch(host, "morpho.org") ||
    shExpMatch(host, "*.morpho.org") ||
    shExpMatch(host, "arbitrum.io") ||
    shExpMatch(host, "*.arbitrum.io") ||
    shExpMatch(host, "gmxinfra.io") ||
    shExpMatch(host, "*.gmxinfra.io") ||
    shExpMatch(host, "exp-tas.com") ||
    shExpMatch(host, "*.exp-tas.com") ||
    shExpMatch(host, "kraken.com") ||
    shExpMatch(host, "*.kraken.com") ||
    shExpMatch(host, "haruko.io") ||
    shExpMatch(host, "*.haruko.io") ||

    // --- Added: gaps identified in top-100 domain review vs. Zscaler global DR safelist ---
    // Source: dr_pac_recommended.csv (2-important tier, not present in drdb.txt
    // or prior custom allowlist)
    shExpMatch(host, "mimecastprotect.com") ||
    shExpMatch(host, "*.mimecastprotect.com") ||
    shExpMatch(host, "monaeo.com") ||
    shExpMatch(host, "*.monaeo.com") ||
    shExpMatch(host, "urbanairship.com") ||
    shExpMatch(host, "*.urbanairship.com") ||
    shExpMatch(host, "nextup.ai") ||
    shExpMatch(host, "*.nextup.ai") ||
    shExpMatch(host, "cliqtrq.com") ||
    shExpMatch(host, "*.cliqtrq.com") ||
    shExpMatch(host, "hsforms.com") ||
    shExpMatch(host, "*.hsforms.com") ||
    shExpMatch(host, "namely.com") ||
    shExpMatch(host, "*.namely.com")
  ) {
    return "DIRECT";
  }

  return "DIRECT";
}