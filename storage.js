// FlashCards 4U v61 storage helpers.
(function(){
  window.FC4UStorage = {
    exportProfile: function(state){
      return JSON.stringify(state, null, 2);
    },
    parseProfile: function(text){
      var data = JSON.parse(text);
      if(!data || typeof data !== "object") throw new Error("فرمت فایل بکاپ درست نیست");
      return data;
    }
  };
})();
