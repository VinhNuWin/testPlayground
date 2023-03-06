// import React from "react";
// import { Select, Input } from 'antd';
// import { useState } from 'react';
// import { useSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
// import DropdownPage from "./components/DropdownPage";

// function QuestionCard({ qst, onChangeQuestion, questionId, deleteQuestion }) {
//   const dispatch = useDispatch();
//   const { id } = useParams();

//   // const [ select, setSelect ] = useState('');
//   const { Option } = Select;
//   const { TextArea } = Input;

//   const [ i, setI] = useState(1)

//   const { cardQuestion } = useSelector((state) => state.addRequest);
//   //const choice = cardQuestion[i].flatMap(e => e.choix)
//   //const myChoice = choice.map(e => e.text)

//   const choice = qst.choix;

//   const onChangeInput = (i, key, value) => {
//     console.log(value);
//     dispatch({
//       type: "SET_STATE",
//       payload: {
//         cardQuestion: cardQuestion.map((elem, index) => {
//           if (index !== questionId) return elem;
//           let newvalues = [...elem[`${key}`]]
//           newvalues[i]=value
//           return { ...elem, [`${key}`]: newvalues};
//         })
//       }
//     });
//   };

//   return (
//         <div>
//         {i === 0 ? (
//             <div>
//                 <form >
//             <div className="field-group">
//                 <div className="field">
//                     <label className="label">First Name</label>
//                     <input
//                         className="input is-expanded"
//                         />
//                 </div>
//                 <DropdownPage />
//                 </div>
//                 </form>
//             </div>

//         ) : i === 1 ? (
//             <div>
//                 <h1>This is Two</h1>
//             </div>
//         ) : null}
//     <div className="forms-card-new">
//       <div className="question-header">
//         <Input
//           onChange={(e) =>
//             onChangeQuestion(questionId, "title", e.target.value)
//           }
//           className="inputs-form question"
//           placeholder="Question"
//         />
//         <Select
//           className="select-type"
//           defaultValue={1}
//           value={qst.type}
//           allowClear
//           onChange={(value) => {
//             console.log(value);
//             onChangeQuestion(questionId, "type", value);
//           }}
//         >
//           <Option value={1}>Reponse courte</Option>
//           <Option value={2}>Reponse longue</Option>
//           <Option value={3}>Choix unique</Option>
//           <Option value={4}>Case a cocher</Option>
//           <Option value={5}>Telecharger un fichier</Option>
//           <Option value={6}>Date</Option>
//           <Option value={7}>Heure</Option>
//         </Select>
//       </div>
// </div>
// </div>
//       );
//         };

// export default QuestionCard;

import React from "react";
import {
  Button,
  Input,
  Select,
  Switch,
  DatePicker,
  Radio,
  TimePicker
} from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const { Option } = Select;
const { TextArea } = Input;

function QuestionCard({ qst, onChangeQuestion, questionId, deleteQuestion }) {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { cardQuestion } = useSelector((state) => state.addRequest);
  //const choice = cardQuestion[i].flatMap(e => e.choix)
  //const myChoice = choice.map(e => e.text)

  const choice = qst.choix;

  const onChangeInput = (i, key, value) => {
    console.log(value);
    dispatch({
      type: "SET_STATE",
      payload: {
        cardQuestion: cardQuestion.map((elem, index) => {
          if (index !== questionId) return elem;
          let newvalues = [...elem[`${key}`]]
          newvalues[i]=value
          return { ...elem, [`${key}`]: newvalues};
        })
      }
    });
  };

  const deleteInput = (id) =>
   {
    const updatedCard={...qst}
    updatedCard.choix = [...updatedCard.choix]
    updatedCard.choix.splice(id,1)
    dispatch({
      type: "SET_STATE",
      payload: {
        cardQuestion:cardQuestion.map((item, i)=> {if(i!==questionId) return item; else return updatedCard})
      }
    })
   }

  return (
    <div className="forms-card-new">
      <div className="question-header">
        <Input
          onChange={(e) =>
            onChangeQuestion(questionId, "title", e.target.value)
          }
          className="inputs-form question"
          placeholder="Question"
        />
        <Select
          className="select-type"
          defaultValue={1}
          value={qst.type}
          allowClear
          onChange={(value) => {
            console.log(value);
            onChangeQuestion(questionId, "type", value);
          }}
        >
          <Option value={1}>Reponse courte</Option>
          <Option value={2}>Reponse longue</Option>
          <Option value={3}>Choix unique</Option>
          <Option value={4}>Case a cocher</Option>
          <Option value={5}>Telecharger un fichier</Option>
          <Option value={6}>Date</Option>
          <Option value={7}>Heure</Option>
        </Select>
      </div>
      <div>
        {qst.type === 1 ? (
          <div>
            <Input
              diabled
              style={{ backgroundColor: "#fff" }}
              className="inputs-form"
              placeholder="Reponse courte"
            />
          </div>
        ) : qst.type === 2 ? (
          <div>
          </div>
        ) : qst.type === 3 ? (
          <div>
            {choice.map((elem, i) => (
              <div key={i}>
                <Input
                  value={elem}
                  onChange={(e) => onChangeInput(i, "choix", e.target.value)}
                />

                <Button
                  onClick={() => {
                    deleteInput(i);
                  }}
                >
                  Delete
                </Button>
              </div>
            ))}
            <Button
              onClick={() =>{
                const updatedCard={...qst}
                updatedCard.choix = [...updatedCard.choix, '']
                dispatch({
                  type: "SET_STATE",
                  payload: {
                    cardQuestion:cardQuestion.map((item, i)=> {if(i!==questionId) return item; else return updatedCard})
                  }
                })
              }}
            >
              Add
            </Button>
          </div>
        ) : qst.type === 5 ? (
          <div>
          </div>
        ) : qst.type === 6 ? (
          <div>
          </div>
        ) : qst.type === 7 ? (
          <div>
          </div>
        ) : null}
      </div>

      <div className="question-footer">
        <div className="question-footer-left"></div>
        <div className="question-footer-right">
          <div className="question-footer-content">
            <Button
              onClick={() => {
                deleteQuestion();
              }}
            >
              Delete
            </Button>
          </div>

          <div className="question-footer-content">Obligatoire</div>
          <div>
            <Switch className="question-footer-content" size="small" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionCard;
