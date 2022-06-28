import React, { Component } from "react";

//components
import Input from "../../components/form/Input";
import Textarea from "../../components/form/Textarea";
import Button from "../../components/form/Button";
import Form from "../../components/form/Form";

class Pricing extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div
                id="admin-pricing"
                className="admin-pricing container-fluid text-center bg-grey"
            >
                <section className="section about">
                    <h2 className="title">Pricing</h2>
                    <Form collection="pricingElements" className="form">
                        <div className="row">
                            <div className="col-6 col-sm-6">
                                <Input
                                    type="text"
                                    className="input"
                                    name="title"
                                    placeholder="Title"
                                />
                            </div>
                            <div className="col-6 col-sm-6">
                                <Textarea
                                    className="input"
                                    name="content"
                                    placeholder="Content"
                                />
                            </div>
                            <div className="col-6 col-sm-6">
                                <Input
                                    type="text"
                                    className="input"
                                    name="subtitle"
                                    placeholder="Subtitle"
                                />
                            </div>
                            <div className="col-6 col-sm-6">
                                <Input
                                    type="text"
                                    className="input"
                                    name="link"
                                    placeholder="Link"
                                />
                            </div>
                            <div className="col-12 col-sm-12">
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
export default Pricing;
