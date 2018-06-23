// Created 26/5/2011 by Jason Kneen http://www.jasonified.com
// Original Banner HTML code lifted from ico.gov.uk

var cookieName = 'ICO_auth';

if ((!window.postBack && document.cookie.indexOf(cookieName) == -1) || (window.postBack)) {
    function check() {

        var checkBox = document.getElementById('chk_ico_cookie');
        if (checkBox.checked) {

            if (window.postBack != null) {

                document.getElementById('ico_banner').style.display = 'none';
                window.postBack();
            }
            else {
                var b = new Date();
                b.setTime(b.getTime()+(365*24*60*60*1000));
                document.cookie = cookieName + '=1; expires=' + b.toUTCString() + '; path=/';
                document.getElementById('ico_banner').style.display = 'none';
            }
        }
        else {
            alert(window.errorMessage || 'Please select that you accept Cookies to remove this message');
        }
    }

    if (navigator.cookieEnabled) {

        var sPrivacyText = 'To find out more about cookies on this website and how to delete cookies, see our <a href="' + window.privacyLink + '" style="color:#fff">privacy notice</a>.'

        if (!window.privacyLink) {
            sPrivacyText = '';
        }
        var sBannerStyle = 'style="z-index: 1000; position: fixed; font-size:14px;background: rgba(0,0,0,0.7);font-weight: bold;color: #fff;padding: 10px 0 0px;width: 100%;text-align: center;bottom:0;"'

        var sBanner = '<div id="ico_banner" ' + sBannerStyle + '><strong>This site uses cookies. By continuing to browse the site you are agreeing to our use of cookies. ' + sPrivacyText + ' </strong><br/>'

        var sForm = '<input id="chk_ico_cookie" type="checkbox" name="chk_ico_cookie" style="padding-top: 2px;margin: 0 8px 0 0;line-height: 1.1em;" /> <label for="chk_ico_cookie" style="padding-top: 2px;margin: 0 8px 0 0;line-height: 1.1em;">I accept cookies from this site.</label> <input type="submit" name="btn_ico_Cookie" value="Continue" id="btnCookie" onClick="javascript:check()" style="clear: none;padding: 2px 5px;margin-top: 3px;margin-bottom: 10px;background-color: #cc0000;border: none;color: #fff;cursor: pointer;font-weight: 300;font-size: 1em;" /></div>'

        document.write(sBanner + sForm)
    }
}