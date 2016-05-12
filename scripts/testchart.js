/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"GoogleCharts","plugindata":{"scriptName":"samplescriptchart","wrapperData":"{\"options\":{\"hAxis\":{\"title\":\"Time of Day\",\"textStyle\":{\"fontSize\":12,\"color\":\"#EE8300\",\"bold\":true},\"titleTextStyle\":{\"fontSize\":14,\"color\":\"#777\",\"bold\":true},\"useFormatFromData\":true,\"viewWindow\":{\"max\":null,\"min\":null},\"minValue\":null,\"maxValue\":null},\"title\":\"Chart Title\",\"vAxes\":[{\"title\":null,\"minValue\":null,\"maxValue\":null,\"useFormatFromData\":true,\"viewWindow\":{\"max\":null,\"min\":null}},{\"useFormatFromData\":true,\"viewWindow\":{\"max\":null,\"min\":null},\"minValue\":null,\"maxValue\":null}],\"is3D\":false,\"pieHole\":\"0.5\",\"booleanRole\":\"certainty\",\"width\":600,\"height\":371,\"pieSliceBorderColor\":\"#ff0000\"},\"state\":{},\"view\":{},\"isDefaultVisualization\":false,\"chartType\":\"PieChart\"}"},"scriptrdata":[{"filename":"samplescriptchart_chart.html","filecontent":"\n<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\">\n\t<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js\"></script>\n\t<script type=\"text/javascript\" src='https://www.google.com/jsapi?autoload={\"modules\":[{ \"name\":\"visualization\",\"version\":\"1\", \n         \"packages\":[\"charteditor\", \"corechart\"]\n         }] \n      }'></script> \n  </head>\n  <script>\n\n  \tgoogle.setOnLoadCallback(loadChart);\n\n    var wrapper;\n\t\n\t\tvar baseURL = window.location.origin + window.location.pathname.substring(0,window.location.pathname.indexOf(\"testchart\"))\n\t\n\t\t$.urlParam = function(name){\n    \t\tvar results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);\n    \t\tif (results==null){\n      \t\t\treturn null;\n    \t\t}else{\n       \t\t\treturn results[1] || 0;\n    \t\t}\n\t\t}\n   \t\tvar token = $.urlParam('auth_token')\n\n\tvar options = {\n\t\ttype: \"POST\",\n\t\turl: baseURL + \"samplescriptchart\",\n\t\tsuccess: function() {},\n\t\tfailure: function() {},\n\t\tdataType: \"json\",\n\t\tprocessData: false, \n\t\tcontentType: false\n\t};\n\t\n\tif(token) {\n\t\toptions[\"headers\"] = { \"Authorization\":  \"bearer \" + token };\n\t}\n\n \tfunction loadChart() {\n\t\tvar chart_content = {\"options\":{\"hAxis\":{\"title\":\"Time of Day\",\"textStyle\":{\"fontSize\":12,\"color\":\"#EE8300\",\"bold\":true},\"titleTextStyle\":{\"fontSize\":14,\"color\":\"#777\",\"bold\":true},\"useFormatFromData\":true,\"viewWindow\":{\"max\":null,\"min\":null},\"minValue\":null,\"maxValue\":null},\"title\":\"Chart Title\",\"vAxes\":[{\"title\":null,\"minValue\":null,\"maxValue\":null,\"useFormatFromData\":true,\"viewWindow\":{\"max\":null,\"min\":null}},{\"useFormatFromData\":true,\"viewWindow\":{\"max\":null,\"min\":null},\"minValue\":null,\"maxValue\":null}],\"is3D\":false,\"pieHole\":\"0.5\",\"booleanRole\":\"certainty\",\"width\":600,\"height\":371,\"pieSliceBorderColor\":\"#ff0000\"},\"state\":{},\"view\":{},\"isDefaultVisualization\":false,\"chartType\":\"PieChart\"};\n\t\tdelete chart_content.containerId;\n\t\tchart_content[\"containerId\"] = \"scriptrChart\"\n   \t\twrapper = new google.visualization.ChartWrapper(chart_content);\n\t\t$.ajax(options).done(function(response) {\n\t\t  \t  \tsetDataSource(response.response.result);\n\t\t \t })\n\t\t \t .fail(function(response ) {\n\t\t \t\tvar out = \"\";\n\t\t\tif(response.status == 0 && response.statusText == \"error\" && response.readyState == 0 && response.responseText == \"\"){\n\t\t\t\tout += \"An error has occurred. This is most likely a cross-domain issue. In case you modified the response object in your script, try adding response.addHeaders(configuration.crossDomainHeaders) to your code.\";\n\t\t\t}else{\n\t\t\t\tvar output = response;\n\t\t\t\tif(response.responseJSON){\n\t\t\t\t\tout += \"Your chart data source script returned a \"+ response.responseJSON.response.metadata.errorCode + \" error.\"\n\t\t\t\t}\n\t\t\t}\n\t\t\t$(\"#scriptrChart\").html(out);\n\t\t  \t})\n\t\t  \t.always(function(data) {\n\t\t\t});\n  \t}\n\t\n    function setDataSource(data) {\n\t  \twrapper.setDataTable(data);\n\t  \tif(wrapper.getChartType() != null) {\n\t  \t\twrapper.draw();\n\t  \t}\n    }\n\n    function drawChart() {\n        wrapper.draw();\n    }\n\n    </script>\n  <body>\n\t  <div id=\"scriptrChart\"></div>\n  </body>\n</html>\n"}]}}*#*#*/
var content= '\n\
<!DOCTYPE html>\n\
<html>\n\
  <head>\n\
    <meta charset=\"utf-8\">\n\
	<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js\"></script>\n\
	<script type=\"text/javascript\" src=\'https://www.google.com/jsapi?autoload={\"modules\":[{ \"name\":\"visualization\",\"version\":\"1\", \n\
         \"packages\":[\"charteditor\", \"corechart\"]\n\
         }] \n\
      }\'></script> \n\
  </head>\n\
  <script>\n\
\n\
  	google.setOnLoadCallback(loadChart);\n\
\n\
    var wrapper;\n\
	\n\
		var baseURL = window.location.origin + window.location.pathname.substring(0,window.location.pathname.indexOf(\"testchart\"))\n\
	\n\
		$.urlParam = function(name){\n\
    		var results = new RegExp(\'[\\?&]\' + name + \'=([^&#]*)\').exec(window.location.href);\n\
    		if (results==null){\n\
      			return null;\n\
    		}else{\n\
       			return results[1] || 0;\n\
    		}\n\
		}\n\
   		var token = $.urlParam(\'auth_token\')\n\
\n\
	var options = {\n\
		type: \"POST\",\n\
		url: baseURL + \"samplescriptchart\",\n\
		success: function() {},\n\
		failure: function() {},\n\
		dataType: \"json\",\n\
		processData: false, \n\
		contentType: false\n\
	};\n\
	\n\
	if(token) {\n\
		options[\"headers\"] = { \"Authorization\":  \"bearer \" + token };\n\
	}\n\
\n\
 	function loadChart() {\n\
		var chart_content = {\"options\":{\"hAxis\":{\"title\":\"Time of Day\",\"textStyle\":{\"fontSize\":12,\"color\":\"#EE8300\",\"bold\":true},\"titleTextStyle\":{\"fontSize\":14,\"color\":\"#777\",\"bold\":true},\"useFormatFromData\":true,\"viewWindow\":{\"max\":null,\"min\":null},\"minValue\":null,\"maxValue\":null},\"title\":\"Chart Title\",\"vAxes\":[{\"title\":null,\"minValue\":null,\"maxValue\":null,\"useFormatFromData\":true,\"viewWindow\":{\"max\":null,\"min\":null}},{\"useFormatFromData\":true,\"viewWindow\":{\"max\":null,\"min\":null},\"minValue\":null,\"maxValue\":null}],\"is3D\":false,\"pieHole\":\"0.5\",\"booleanRole\":\"certainty\",\"width\":600,\"height\":371,\"pieSliceBorderColor\":\"#ff0000\"},\"state\":{},\"view\":{},\"isDefaultVisualization\":false,\"chartType\":\"PieChart\"};\n\
		delete chart_content.containerId;\n\
		chart_content[\"containerId\"] = \"scriptrChart\"\n\
   		wrapper = new google.visualization.ChartWrapper(chart_content);\n\
		$.ajax(options).done(function(response) {\n\
		  	  	setDataSource(response.response.result);\n\
		 	 })\n\
		 	 .fail(function(response ) {\n\
		 		var out = \"\";\n\
			if(response.status == 0 && response.statusText == \"error\" && response.readyState == 0 && response.responseText == \"\"){\n\
				out += \"An error has occurred. This is most likely a cross-domain issue. In case you modified the response object in your script, try adding response.addHeaders(configuration.crossDomainHeaders) to your code.\";\n\
			}else{\n\
				var output = response;\n\
				if(response.responseJSON){\n\
					out += \"Your chart data source script returned a \"+ response.responseJSON.response.metadata.errorCode + \" error.\"\n\
				}\n\
			}\n\
			$(\"#scriptrChart\").html(out);\n\
		  	})\n\
		  	.always(function(data) {\n\
			});\n\
  	}\n\
	\n\
    function setDataSource(data) {\n\
	  	wrapper.setDataTable(data);\n\
	  	if(wrapper.getChartType() != null) {\n\
	  		wrapper.draw();\n\
	  	}\n\
    }\n\
\n\
    function drawChart() {\n\
        wrapper.draw();\n\
    }\n\
\n\
    </script>\n\
  <body>\n\
	  <div id=\"scriptrChart\"></div>\n\
  </body>\n\
</html>\n\
';  response.write(content);response.close();			