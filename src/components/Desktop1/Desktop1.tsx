import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { BiArrowDownIcon2 } from './BiArrowDownIcon2.js';
import { BiArrowDownIcon } from './BiArrowDownIcon.js';
import classes from './Desktop1.module.css';
import { MdiSkiIcon } from './MdiSkiIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 4:2 */
export const Desktop1: FC<Props> = memo(function Desktop1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.unsplashAgmCFUm6gaU}></div>
      <div className={classes.rectangle5}></div>
      <div className={classes.biArrowDown}>
        <BiArrowDownIcon className={classes.icon} />
      </div>
      <div className={classes.biArrowDown2}>
        <BiArrowDownIcon2 className={classes.icon2} />
      </div>
      <div className={classes.GetawayHolidays} id='petux'>Приветствуем вас в Getaway Holidays </div>
      <div className={classes.unnamed}>
        Наши услуги заспространаются на всё время вашего отдыха и вы ими можете воспользоваться в любой день когда вам
        это будет удобно
      </div>
      <div className={classes.unnamed2} id='petux2'>Наши услуги</div>
      <div className={classes.unnamed3}>
        Мы предлагаем прекрасный отдых на лыжах, а также лучшие пакеты услуг, для комфортного время припровождения.
      </div>
      <div className={classes.unnamed4}>Перейти к услугам</div>
      <div className={classes.rectangle1}></div>
      <div className={classes.getawayHolidays}>Getaway Holidays</div>
      <div className={classes.mdiSki}>
        <MdiSkiIcon className={classes.icon3} />
      </div>
      <div className={classes.rectangle2}></div>
      <div className={classes.rectangle3}></div>
      <div className={classes.rectangle4}></div>
      <div className={classes.unnamed5}><a href='#petux'>О компании</a></div>
      <div className={classes.unnamed6}><a href='#petux2'>Наши услуги</a></div>
      <div className={classes.unnamed7}><a href='#petux3'>Выбор услуг</a></div>
      <div className={classes.rectangle6}></div>
      <div className={classes.unnamed8}>
        <div className={classes.textBlock}>Один утренний перекус :</div>
        <div className={classes.textBlock2}> горячий напиток и закуска</div>
        <div className={classes.textBlock3}>
          <p></p>
        </div>
        <div className={classes.textBlock4}>
          <p></p>
        </div>
        <div className={classes.textBlock5}>Один ужин : </div>
        <div className={classes.textBlock6}> подаётся в ресторане на территории отеля</div>
        <div className={classes.textBlock7}>
          <p></p>
        </div>
        <div className={classes.textBlock8}>
          <p></p>
        </div>
        <div className={classes.textBlock9}>Единоразовая одначасовая спа услуга :</div>
        <div className={classes.textBlock10}> санаторно-курортная процедура</div>
        <div className={classes.textBlock11}>
          <p></p>
        </div>
        <div className={classes.textBlock12}>
          <p></p>
        </div>
        <div className={classes.textBlock13}>Бесплатный горнолыжный подъёмник :</div>
        <div className={classes.textBlock14}> один день бесплатого проезда на</div>
        <div className={classes.textBlock15}> фуникулёре</div>
      </div>
      <div className={classes.unnamed9}>Базовый пакет</div>
      <div className={classes.rectangle7}></div>
      <div className={classes.unnamed10}>
        <div className={classes.textBlock16}>Три утренних перекуса :</div>
        <div className={classes.textBlock17}> горячий напиток и закуска</div>
        <div className={classes.textBlock18}>
          <p></p>
        </div>
        <div className={classes.textBlock19}>
          <p></p>
        </div>
        <div className={classes.textBlock20}>Три ужина : </div>
        <div className={classes.textBlock21}> подаётся в ресторане на территории отеля</div>
        <div className={classes.textBlock22}>
          <p></p>
        </div>
        <div className={classes.textBlock23}>
          <p></p>
        </div>
        <div className={classes.textBlock24}>Три одначасовых спа услуг :</div>
        <div className={classes.textBlock25}> санаторно-курортная процедура</div>
        <div className={classes.textBlock26}>
          <p></p>
        </div>
        <div className={classes.textBlock27}>
          <p></p>
        </div>
        <div className={classes.textBlock28}>Бесплатный горнолыжный подъёмник :</div>
        <div className={classes.textBlock29}> Три дня бесплатого проезда на</div>
        <div className={classes.textBlock30}> фуникулёре</div>
      </div>
      <div className={classes.unnamed11}>Стандартный пакет</div>
      <div className={classes.rectangle8}></div>
      <div className={classes.unnamed12}>
        <div className={classes.textBlock31}>Пять утренних перекуса :</div>
        <div className={classes.textBlock32}> горячий напиток и закуска</div>
        <div className={classes.textBlock33}>
          <p></p>
        </div>
        <div className={classes.textBlock34}>
          <p></p>
        </div>
        <div className={classes.textBlock35}>Пять ужинов : </div>
        <div className={classes.textBlock36}> подаётся в ресторане на территории отеля</div>
        <div className={classes.textBlock37}>
          <p></p>
        </div>
        <div className={classes.textBlock38}>
          <p></p>
        </div>
        <div className={classes.textBlock39}>Пять одначасовых спа услуг :</div>
        <div className={classes.textBlock40}> санаторно-курортная процедура</div>
        <div className={classes.textBlock41}>
          <p></p>
        </div>
        <div className={classes.textBlock42}>
          <p></p>
        </div>
        <div className={classes.textBlock43}>Бесплатный горнолыжный подъёмник :</div>
        <div className={classes.textBlock44}> Пять дней бесплатого проезда на</div>
        <div className={classes.textBlock45}> фуникулёре</div>
      </div>
      <div className={classes.unnamed13}>Люкс пакет</div>
      <div className={classes.rectangle9}></div>
      <div className={classes.unnamed14}>Уроки катания</div>
      <div className={classes.unnamed15}>
        <div className={classes.textBlock46}>На лыжах</div>
        <div className={classes.textBlock47}>
          <p></p>
        </div>
        <div className={classes.textBlock48}>
          <p></p>
        </div>
        <div className={classes.textBlock49}>На сноуборде</div>
      </div>
      <div className={classes.rectangle10}></div>
      <div className={classes.unnamed16}>
        <div className={classes.textBlock50}>Прокат/обслуживание</div>
        <div className={classes.textBlock51}>оборудования</div>
      </div>
      <div className={classes.unnamed17}>Обслуживание лыж</div>
      <div className={classes.unnamed18}>Обслуживание сноубордов</div>
      <div className={classes.unnamed19}>Прокат лыж</div>
      <div className={classes.unnamed20}>Прокат сноубордов</div>
      <div className={classes.rectangle11}></div>
      <div className={classes.unnamed21}>
        <div className={classes.textBlock52}>катание на бобслейных санках</div>
        <div className={classes.textBlock53}>
          <p></p>
        </div>
        <div className={classes.textBlock54}>
          <p></p>
        </div>
        <div className={classes.textBlock55}>катание на коньках</div>
        <div className={classes.textBlock56}>
          <p></p>
        </div>
        <div className={classes.textBlock57}>
          <p></p>
        </div>
        <div className={classes.textBlock58}>катание на горных велосипедах по снегу</div>
        <div className={classes.textBlock59}>
          <p></p>
        </div>
        <div className={classes.textBlock60}>
          <p></p>
        </div>
        <div className={classes.textBlock61}>спа-процедуры.</div>
      </div>
      <div className={classes.unnamed22}>Другие виды деятельности</div>
      <div className={classes.unsplashR1l1xVWi_Mo}></div>
      <div className={classes.unnamed23}id='petux3'>Собери свой пакет</div>
      <div className={classes.unnamed24}>Количество утренних перекусов :</div>
      <div className={classes.unnamed25}>Количество ужинов :</div>
      <div className={classes.unnamed26}>Количество спа услуг :</div>
      <div className={classes.unnamed27}>Количество поездок на подъёмнике :</div>
      <div className={classes.rectangle12}></div>
      <div className={classes.rectangle13}></div>
      <div className={classes.rectangle14}></div>
      <div className={classes.rectangle15}></div>
      <div className={classes.unnamed36}><input placeholder='Ввод...'></input></div>
      <div className={classes.unnamed37}><input placeholder='Ввод...'></input></div>
      <div className={classes.unnamed38}><input placeholder='Ввод...'></input></div>
      <div className={classes.unnamed39}><input placeholder='Ввод...'></input></div>
    </div>
  );
});
