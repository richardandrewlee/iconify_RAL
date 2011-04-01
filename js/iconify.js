/**
 * Iconify 0.71 by Richard Lee - RichardAndrewLee@yahoo.com
 * Icon images - http://www.brandspankingnew.net/archive/2006/06/doctype_icons_2.html
 * download them and drop on a live site use the path to the icons
 * $.fn.iconify("[directory to icons]", "[icon prefix if none=""]", "[icon file extension]", "[excluded doc types]");
 * $.fn.iconify("http://www.tdesignonline.com/TESTING_FILES/doc_types/", "icon_", ".gif", "html js");
 */

//vars
var fileExclusions;
var iExtV
var iPreV
var iLocV

//filter file names, directories, and file name exclusions
function getFileName(href) {
    if (href.indexOf('.') < 0) {
        return false;
    }
    var fileExt = href.substr((href.lastIndexOf('.') + 1))
    
    if($.inArray(fileExt,fileExclusions)>-1){
        return false;    
    }

    switch (fileExt) {
    case "jpg":
    case "gif":
    case "png":
        fileExt = "image";
        break;
    case "mp3":
    case "aac":
    case "wav":
        fileExt = "audio";
        break;
    }

    return fileExt
}

//adding the image to the anchor    
function addImage(obj) {
    var fileName = getFileName(obj.attr("href"));

    if (fileName) {
        $("<img src='" + iLocV + iPreV + fileName + iExtV + "' />").appendTo(obj);
    }
}

//Setting up iconify
$.fn.iconify = function(iLoc, iPre, iExt, exclusions) {

    iLocV = iLoc;
    iPreV = iPre;
    iExtV = iExt;
    if (exclusions) {
        fileExclusions = exclusions.split(" ")
    }
    $(document).ready(function() {
        $("a").each(function() {
            addImage($(this))
        });
    });
}