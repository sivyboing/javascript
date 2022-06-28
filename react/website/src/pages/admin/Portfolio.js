import React, { Component } from "react";

//components
import Input from "../../components/form/Input";
import Button from "../../components/form/Button";
import File from "../../components/form/File";
import Form from "../../components/form/Form";

class Portfolio extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div
                id="admin-portfolio"
                className="admin-portfolio container-fluid text-center bg-grey"
            >
                <section className="section portfolio">
                    <h2 className="title">Portfolio</h2>
                    <Form collection="portfolioElements" className="form">
                        <div className="row">
                            <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                                <Input
                                    type="text"
                                    className="input"
                                    name="title"
                                    placeholder="Title"
                                />
                            </div>
                            <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                                <Input
                                    type="text"
                                    className="input"
                                    name="subtitle"
                                    placeholder="Subtitle"
                                />
                            </div>
                            <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                                <File
                                    type="file"
                                    className="file"
                                    name="file"
                                    placeholder="File"
                                />
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <Button
                                    type="submit"
                                    className="btn btn-primary"
                                    text="Submit"
                                />
                            </div>
                        </div>
                    </Form>
                </section>
            </div>
        );
    }
}
export default Portfolio;
