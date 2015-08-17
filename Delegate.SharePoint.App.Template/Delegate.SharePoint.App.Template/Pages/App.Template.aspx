<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd" />
<%-- SharePoint components --%>

<%@ Page Language="C#" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%-- Allow this page to be iframed --%>
<WebPartPages:AllowFraming ID="AllowFraming" runat="server" />
<html>
<head>
    <title>Delegate's addin template</title>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />

    <%-- SharePoint Scripts --%>
    <script type="text/javascript" src="/_layouts/15/MicrosoftAjax.js"></script>
    <script type="text/javascript" src="/_layouts/15/init.js"></script>
    <script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script>
    <script type="text/javascript" src="/_layouts/15/sp.js"></script>
    <script type="text/javascript" src="/_layouts/15/sp.requestexecutor.js"></script>

    <%-- Frameworks (angular, jquery, etc. - preferred weapon of choice!) --%>
    <script type="text/javascript" src="../Scripts/angular.min.js"></script>

    <%-- 
        The below files are app specific, and should be minified 
        using e.g. the ajaxmin file from NuGet "Delegate_AjaxMinBuilder".
        But for developing purpose, I've left the references for the unminifed scripts here.
    --%>
    <script type="text/javascript" src="../Scripts/app/module.js"></script>
</head>
<body>
</body>
</html>
