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
    localHostOrDomainIs(host, "visionhill.com") ||
    // third party domains
    localHostOrDomainIs(host, "usequark.xyz") ||
    localHostOrDomainIs(host, "netsuite.com") ||
    localHostOrDomainIs(host, "artemisxyz.com") ||
    localHostOrDomainIs(host, "morpho.org") ||
    localHostOrDomainIs(host, "arbitrum.io") ||
    localHostOrDomainIs(host, "gmxinfra.io") ||
    localHostOrDomainIs(host, "exp-tas.com") ||
    localHostOrDomainIs(host, "kraken.com") ||
    //ZPA Connectivity is required for Zscaler DR
    localHostOrDomainIs(host, "*.zpath.net") )  
    return "DIRECT";
  
//ZPA Connectivity is required for Zscaler DR - PRIVATE IP RANGE Belongs to IP
  if (isInNet(host, "100.64.0.0", "255.255.0.0"))
return "DIRECT";

}