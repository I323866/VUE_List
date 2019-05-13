import router from '@/router'
export default {
  goHome: function() {

    router.push("/");
  },
  goPKG: function() {

    router.push("/Packages");
  },
  goSI: function() {

    router.push("/ScopeItems");
  },
  goTable: function() {

    router.push("/selTable");
  },
  goTreeTable: function() {

    router.push("/TreeTable");
  },
  goPanel: function() {

    router.push("/Panel");
  },
  goDetail: function(entry,objectname) {
    router.push(`Detail/${objectname}/?id=${entry.id}&name=${entry.name}`);
  },

  goDetai2: function(entry,objectname) {
    router.push(`Panel/${objectname}/?id=${entry}`);
  }
};
