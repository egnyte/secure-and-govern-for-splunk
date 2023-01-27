class AccountHook {
    constructor(globalConfig, serviceName, state, mode, util) {
		this.globalConfig = globalConfig;
		this.serviceName = serviceName;
		this.state = state;
		this.mode = mode;
		this.util = util;
	}
	/*
		Put logic here to execute javascript on UI creation.
	*/
	onChange(field, value, dataDict) {
        this.util.setState((prevState) => {
            let data = { ...prevState.data };
            if(data.endpoint.value == "US")
            {
                data.endpoint.markdownMessage = {
                text: "USA Authorization (usc1-egnyteprotect)",
                link: `https://usc1-api.egnyteprotect.com/oauth2/code?client_id=pxhzq22ds3jp75bwtjq6vhme&no_redirect=true&response_type=code`,
                markdownType: "link",
                };
            }
            else{
                data.endpoint.markdownMessage = {
                text: "Europe Authorization (euw1-egnyteprotect)",
                link: `https://euw1-api.egnyteprotect.com/oauth2/code?client_id=pxhzq22ds3jp75bwtjq6vhme&no_redirect=true&response_type=code`,
                markdownType: "link",
                };
            }
            
        return { data };
        });
	}
 
	onRender() {
        
        this.util.setState((prevState) => {
            let data = { ...prevState.data };
            data.endpoint.markdownMessage = {
            text: "USA Authorization (usc1-egnyteprotect)",
            link: `https://usc1-api.egnyteprotect.com/oauth2/code?client_id=pxhzq22ds3jp75bwtjq6vhme&no_redirect=true&response_type=code`,
            markdownType: "link",
            };
            return { data };
        });
 
	}
 
	isEmpty(value) {
		/* Returns true if value is not set else false */
		return value === null || value.trim().length === 0;
	}
}
 
export default AccountHook;