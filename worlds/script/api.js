/* ----------------------------------
WHAT : Data Sourcing & Transformation
WHY  : Handling of Data Sources AND
       Transformation into Objects
---------------------------------- */

const api = {

  // Generate Current Date & Time in Raw Format
  getDate: () => {
    let output = new Date();
    return output;
  },

  // Format Date & Time to "DD MMM YYYY"
  formatDate: (input) => {
    let formatter = new Intl.DateTimeFormat(
      'en-GB',
      {
        day   : '2-digit',
        month : 'short',
        year  : 'numeric'
      }
    );

    let fDate = new Date(input);
    let output = formatter.format(fDate);
    return output;
  },

  // Write Current Calendar Year (YYYY) into a Target Element
  getYYYY: (target) => {
    document.querySelector(target).textContent = api.getDate().getFullYear();
  },

  // Import Data from a Source File
  getData: async(url) => {
    try {
      let module = await import(url, { with: { type: 'json' } });
      let output = module.default;
      return output;
    } catch (e) {
      console.error('Data Import Failed: ', e);
    }
  },

  // Directory : Data Source
  data: {
    blog: '../data/blog.json',
    user: '../data/user.json'
  }

};

export default api;