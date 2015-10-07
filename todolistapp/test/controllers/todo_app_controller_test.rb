require 'test_helper'

class TodoAppControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

end
