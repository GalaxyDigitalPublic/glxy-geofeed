function FindProxyForURL(url, host)
{
  //
  // Bypass proxy for Galaxy Digital and related domains


  //
  if (localHostOrDomainIs(host, "contactgfm.com") ||
    localHostOrDomainIs(host, "g2d2.io") ||
    localHostOrDomainIs(host, "galaxy.app") ||
    localHostOrDomainIs(host, "galaxy.com") ||
    localHostOrDomainIs(host, "galaxydigital.ca") ||
    localHostOrDomainIs(host, "galaxydigital.io") ||
    localHostOrDomainIs(host, "galaxydigital.services") ||
    localHostOrDomainIs(host, "galaxyfundmanagement.com") ||
    localHostOrDomainIs(host, "galaxyinteractive.io") ||
    localHostOrDomainIs(host, "galaxyip.com") ||
    localHostOrDomainIs(host, "galaxy.shop") ||
    localHostOrDomainIs(host, "galaxytest.io") ||
    localHostOrDomainIs(host, "gdt.exchange") ||
    localHostOrDomainIs(host, "gdtexchange.com") ||
    localHostOrDomainIs(host, "gdtrading.io") ||
    localHostOrDomainIs(host, "gfmcryptocademy.com") ||
    localHostOrDomainIs(host, "glxy.com") ||
    localHostOrDomainIs(host, "glxy.net") ||
    localHostOrDomainIs(host, "visionhill.com"))

    return "DIRECT";

//ZPA Connectivity is required for Zscaler DR - PRIVATE IP RANGE Belongs to IP
  if (isInNet(host, "100.64.0.0", "255.255.0.0"))
return "DIRECT";

//Third Party Allowlist for ZIA DR
  if (
 shExpMatch(host, "usequark.xyz") ||
 shExpMatch(host, "*.usequark.xyz") ||
 shExpMatch(host, "*.netsuite.com") ||
 shExpMatch(host, "netsuite.com") ||
 shExpMatch(host, "*.artemisxyz.com") ||
 shExpMatch(host, "artemisxyz.com") ||
 shExpMatch(host, "*.morpho.org") ||
 shExpMatch(host, "morpho.org") ||
 shExpMatch(host, "*.arbitrum.io") ||
 shExpMatch(host, "arbitrum.io") ||
 shExpMatch(host, "*.gmxinfra.io") ||
 shExpMatch(host, "gmxinfra.io") ||
 shExpMatch(host, "*.exp-tas.com") ||
 shExpMatch(host, "exp-tas.com") ||
 shExpMatch(host, "*.kraken.com") ||
 shExpMatch(host, "kraken.com") ||

 // --- Added: gaps identified in top-100 domain review vs. Zscaler global DR safelist ---
 // Source: dr_pac_recommended.csv (2-important tier, not present in drdb.txt or prior custom allowlist)
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

}