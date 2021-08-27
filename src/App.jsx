import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div class="input-area section-area">
        <input type="text" placeholder="TODOを追加" />
        <button>追加</button>
      </div>
      <div class="incomplete-area section-area">
        <p>未完了のTODO</p>
        <ul>
          <li>
            <div>
              <span>ああああ</span>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
          <li>
            <div>
              <span>ああああ</span>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
        </ul>
      </div>
      <div class="complete-area section-area">
        <p>完了のTODO</p>
        <ul>
          <li>
            <div>
              <span>ああああ</span>
              <button>戻す</button>
            </div>
          </li>
          <li>
            <div>
              <span>ああああ</span>
              <button>戻す</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
