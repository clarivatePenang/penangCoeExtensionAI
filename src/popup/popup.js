class PopupManager {
    constructor() {
      this.init();
    }
  
    async init() {
      const activeTab = await this.getActiveTabURL();
      if (this.isSalesforceTab(activeTab)) {
        this.initializeDropdown();
        this.setupEventListeners();
      } else {
        this.showNotInSFDCMessage();
      }
    }
  
    async getActiveTabURL() {
      const tabs = await chrome.tabs.query({
        currentWindow: true,
        active: true
      });
      return tabs[0];
    }
  
    isSalesforceTab(tab) {
      return tab.url.includes("clarivateanalytics.lightning.force.com") || 
             tab.url.includes("clarivateanalytics--preprod.sandbox.lightning.force.com") || 
             tab.url.includes("proquestllc.lightning.force.com");
    }
  
    initializeDropdown() {
      chrome.storage.sync.get('savedSelection', function(items) {
        if (items.savedSelection) {
          document.getElementById('selectionDropdown').value = items.savedSelection;
        }
      });
    }
  
    setupEventListeners() {
      document.getElementById('saveButton').addEventListener('click', () => {
        const selectedValue = document.getElementById('selectionDropdown').value;
        this.saveSelection(selectedValue);
        alert('Please refresh CForce (Salesforce Website). Thanks 😊');
      });
    }
  
    saveSelection(selectedValue) {
      chrome.storage.sync.set({ 'savedSelection': selectedValue }, () => {
        console.log('Selection saved: ' + selectedValue);
        chrome.runtime.sendMessage({
          message: 'saveSelection',
          data: selectedValue
        });
      });
    }
  
    showNotInSFDCMessage() {
      const container = document.getElementsByClassName("container")[0];
      container.innerHTML = `
        <div class="notInSFDC">
          To view your team's setting or status colour configuration, 
          please open this extension in your Salesforce page
        </div>`;
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    new PopupManager();
  });