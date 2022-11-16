# Assignment 3 - Graphs
Create a web page with two pages that will display charts based on the following rules.The page must be fully responsive, including a menu (must contain some type of responsive menu - hamburger, drawer, . ..), content (must contain a title) and the article.In the first of the tables, the results that students have achieved in this subject during the last six academic years will be graphically displayed.   These achievements are available in the attached xmls file.  On page http://old.iolab.sk/evaluation/sse/sse.php

# Part 1
(1), compare the data from the last years using grouped vertical graphs in a single figure (an example is given in the figure).  It should be clear from the graphs what is shown, the axes must be clear and, for the bars, it must be obvious what they represent. 

(2) also display the results from all school years in pie charts (each pie chart will represent one year and will be divided into sections corresponding to each individual year - e.g.  The year 2021/2022 and the percentage ratio for each individual country).  It should be clear from the graph which round, if any, corresponds to which year, and also, from the graph, which country takes up which percentage of the whole graph. 

(3) also create an inline (in ́y) graph of the subtotals of the sentence on which you display the statistic you have chosen based on this graph. 

(4) Contribute a mobile input (over 280px) - for vertical charts, the bars need to be changed to horizontal.  The individual graphs need to be arranged underneath each other.  All graphs (including your own, contribute so that they are given a number of counts on the mobile).
Create charts using a popular JS library (e.g. Plotly - https://plotly.com/javascript/,Google Charts - https://developers.google.com/chart/, Apex Charts - https://apexcharts.com/,Charts.js - https://www.chartjs.org/, ...  ) 

# Part 2
In the second step, the chart will be created based on the data generated on the page http://old.iolab.sk/evaluation/sse/sse.php

(1) The data needs to be plotted sequentially on the chart until the user presses the "End" button on the page.  At this point it is necessary to display the graph in its entirety, i.e. from the beginning of its plotting to the end of its plotting.

(2) In the figure, plot two graphical relations in two colours - corresponding to the two dimensions (luminance sine and rhombus). 

(3) On the page, allow the user to change the amplitude of the current of both measurements so that you can obtain the current constant.

(4) Change the amplitude of the current using the slider and the input text field.   Define which of these two elements will be displayed based on the checkbox.Both elements will have the same size and borders, i.e. after switching them the surrounding elements will not change their position.  The value of the text input will be limited by the values that can be defined by the slider.The visual appearance of the slider (at this point no custom creativity is allowed) is shown in the figure.  When the value is changed, this value is displayed on the slider.When the slider is moved, the value in the field will change again.Define the element to change the amplitude (including the graphic design) by creating a custom web component. 

(5) Create the component in such a way that it is possible to influence the individual parameters of the component (e.g.  The minimum and maximum for the slider should be set by the driver when the component is created). 

(6) Next to the figure, display the next 2 checkboxes, with which it will be possible to influence which graph should be displayed in the figure (first or second, both at the same time, neither).  

(7) After the measurement in the figure is complete, you can also "zoom" parts of the graphs.

# Notes:
(1) CSS (e.g. Bootstrap) and JS libraries (e.g. jQuery) can be used.  You are not allowed to use jQuery UI.

(2) Using Bootstrap, its derivatives, or any other graphical framework to create a responsive design, including menus, is allowed.

(3) Aesthetics is again up to you and you alone...  But remember, it's nicer to look pretty.

Translated with www.DeepL.com/Translator original: Slovak
