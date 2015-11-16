<html lang="ru">
    <head>
       <meta charset="utf-8">
        <title>Счетчик для акции</title>
        <link href="css/normalize.css" rel="stylesheet"></link>
        <link href="css/style.css" rel="stylesheet"></link>
    </head>
    <body>
        <article class="counter">
            <h2 class="counter__header clearfix">
                До конца акции осталось:
            </h2>        
            <div class="counter__content clearfix">    
                <div class="date clearfix">
                   <div class="date__layout">
                        <div id="day" class="date__day" > 00                                                     
                        </div> 
                       <div class="date__border">
                       </div>  
                    </div>
                    <p>дней</p>
                </div>
                <div class="time">
                    <ul>
                    <li>
                       <div class="time__layout">
                            <div id="hour" class="time__item">
                            00 
                            </div>
                           <div class="time__border">
                           </div>                              
                        </div>
                        <p>часов</p>
                    </li>
                    <li>
                       <div class="time__layout">
                            <div id="minute" class="time__item">
                                00 
                            </div>
                            <div class="time__border">
                            </div>                              
                        </div>
                            <p>минут</p>
                    </li>
                    <li>
                        <div class="time__layout">
                            <div id="second" class="time__item">
                            00                              
                            </div> 
                            <div class="time__border">
                            </div>                             
                        </div>
                        <p>секунд</p>
                    </li>
                    </ul>
                </div>
            </div>
        </article>
        <script src="js/script.js"></script>
    </body>
</html>