import React , {useState} from "react";
import mac from "../../../../assets/img/choiceMc.png";
import { SliderItemMain, SliderItemTop, SliderItemWrapper, SliderProgress, SliderProgressWrapper } from "./Styled";

function SliderItem() {
    const arr = [1,2,3,4,5]
    const [Desigin, setDesigin] = useState(4)
    const [Power, setPower] = useState(2)
    const [Display, setDisplay] = useState(4)
    const [Camera, setCamera] = useState(5)
    const [Answer, setAnswer] = useState(5)
    const [Portability, setPortability] = useState(4)
  return (
    <SliderItemWrapper>
      <SliderItemTop>
        <div>
          <p>Портативные колонки </p>
          <h4>Apple iPhone 13 Pro Max 256 ГБ серый</h4>
        </div>
        <div>
          <button>
            <i className="bi bi-heart"></i>
          </button>
          <button>
            <i className="bi bi-bar-chart-line"></i>
          </button>
        </div>
      </SliderItemTop>
      <SliderItemMain>
            <img src={mac} alt="" />
            <SliderProgressWrapper>
                <SliderProgress>
                    <p>Дизайн</p>
                    <div>
                    {
                        arr?.map((item, index)=>(
                            <span key={index} className={Desigin >= index+1 ? 'active': null}></span>
                        ))
                    }
                    </div>
                </SliderProgress>
                <SliderProgress>
                    <p>Батарея</p>
                    <div>
                    {
                        arr?.map((item, index)=>(
                            <span key={index} className={Power >= index+1 ? 'active': null}></span>
                        ))
                    }
                    </div>
                </SliderProgress>
                <SliderProgress>
                    <p>Дисплей</p>
                    <div>
                    {
                        arr?.map((item, index)=>(
                            <span key={index} className={Display >= index+1 ? 'active': null}></span>
                        ))
                    }
                    </div>
                </SliderProgress>
                <SliderProgress>
                    <p>Камера</p>
                    <div>
                    {
                        arr?.map((item, index)=>(
                            <span key={index} className={Camera >= index+1 ? 'active': null}></span>
                        ))
                    }
                    </div>
                </SliderProgress>
                <SliderProgress>
                    <p>Ответ</p>
                    <div>
                    {
                        arr?.map((item, index)=>(
                            <span key={index} className={Answer >= index+1 ? 'active': null}></span>
                        ))
                    }
                    </div>
                </SliderProgress>
                <SliderProgress>
                    <p>Портативность</p>
                    <div>
                    {
                        arr?.map((item, index)=>(
                            <span key={index} className={Portability >= index+1 ? 'active': null}></span>
                        ))
                    }
                    </div>
                </SliderProgress>
            </SliderProgressWrapper>
      </SliderItemMain>

    </SliderItemWrapper>
  );
}

export default SliderItem;
