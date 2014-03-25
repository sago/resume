require 'spec_helper'

describe ApplicationController do
  describe "Get the main menu" do
    it "Should show the aplication layout" do
        get :index
        expect(response.status).to eq(200)
    end
    it "Should load the modal on click in modal-tab"

  end
end
