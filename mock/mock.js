module.exports = {
  rules: [
    {
      pattern: /\/api\/getLivelist.php\?rtype=origin$/,
      respondwith: './all.json'
    },
    {
      pattern: /\/api\/getLivelist.php\?rtype=more$/,
      respondwith: './livelist-more.json'
    },
    {
      pattern: /\/api\/getLivelist.php\?rtype=refresh$/,
      respondwith: './livelist-refresh.json'
    },
    {
      pattern: /\/api\/getLivelist.php\?rtype=detail3$/,
      respondwith: './bag.json'
    },
    {
      pattern: /\/api\/getLivelist.php\?rtype=detail4$/,
      respondwith: './shoes.json'
    },
    {
      pattern: /\/api\/getLivelist.php\?rtype=detail8$/,
      respondwith: './shuma.json'
    },
    {
      pattern: /\/api\/getLivelist.php\?rtype=detail1$/,
      respondwith: './cai.json'
    },
    {
      pattern: /\/api\/getLivelist.php\?rtype=detail2$/,
      respondwith: './geren.json'
    },
    {
      pattern: /\/api\/getLivelist.php\?rtype=detail7$/,
      respondwith: './bu.json'
    },
    {
      pattern: /\/api\/getLivelist.php\?rtype=detail6$/,
      respondwith: './fushi.json'
    },
    {
      pattern: /\/api\/getLivelist.php\?rtype=detail[5,9]$/,
      respondwith: './bu.json'
    },
    {
      pattern: /\/api\/getLivelist.php\?rtype=detailgoods$/,
      respondwith: './detail.json'
    },
    {
      pattern: /\/api\/getLivelist.php\?rtype=guide$/,
      respondwith: './welcome.json'
    }
  ]
};
