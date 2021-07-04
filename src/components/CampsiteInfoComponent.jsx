import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Link } from "react-router-dom";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

function RenderCampsite({ campsite }) {
  return (
    <div className="col-md-5 m-1">
      <Card>
        <CardImg top src={campsite.image} alt={campsite.name} />
        <CardBody>
          <CardText>{campsite.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function RenderComments({ comments }) {
  if (comments) {
    return (
      <div className="col-md-5 m-1">
        <h4>Comments</h4>
        {comments.map((comment) => {
          return (
            <div key={comment.id}>
              <p>
                {comment.text}
                <br />
                -- {comment.author},{" "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(comment.date)))}
              </p>
            </div>
          );
        })}
        <CommentForm />
      </div>
    );
  }
  return <div />;
}

function CommentForm() {
  const [modal, setModal] = useState(false);
  
  const toggleModal = () => setModal(!modal);

  function handleSubmit(values) {
    console.log("Current state is: " + JSON.stringify(values));
    alert("Current state is: " + JSON.stringify(values));
  }

  return (
    <>
      <Button outline onClick={toggleModal}>
        <i className="fa fa-pencil fa-lg mr-2" />
        Sumbit Commemnt
      </Button>

      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Submit Comment</ModalHeader>
        <ModalBody>
          <LocalForm onSubmit={(values) => handleSubmit(values)}>
            <div className="form-group">
              <Label htmlFor="rating">Rating</Label>
              <Control.select
                model=".rating"
                id="rating"
                name="rating"
                className="form-control"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Control.select>
            </div>
            <div className="form-group">
              <Label htmlFor="yourName">Your Name</Label>
              <Control.text
                model=".yourName"
                id="yourName"
                name="yourName"
                className="form-control"
                validators={{
                  required,
                  minLength: minLength(2),
                  maxLength: maxLength(15),
                }}
              />
              <Errors
                className="text-danger"
                model=".yourName"
                show="touched"
                component="div"
                messages={{
                  required: "Required",
                  minLength: "Must be at least 2 characters",
                  maxLength: "Must be 15 characters or less",
                }}
              />
            </div>
            <div className="form-group">
              <Label htmlFor="comment">Comment</Label>
              <Control.textarea
                model=".comment"
                id="comment"
                name="comment"
                className="form-control"
              />
            </div>
            <Button type="submit" value="submit" color="primary">
              Submit
            </Button>
          </LocalForm>
        </ModalBody>
      </Modal>
    </>
  );
}

function CampsiteInfo(props) {
  if (props.campsite) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/directory">Directory</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
            </Breadcrumb>
            <h2>{props.campsite.name}</h2>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderCampsite campsite={props.campsite} />
          <RenderComments comments={props.comments} />
        </div>
      </div>
    );
  }
  return <div />;
}

export default CampsiteInfo;
