class UsersController < ApplicationController
  before_action :authorize
  skip_before_action :authorize, only: [:create]
      def index 
        render json: User.all 
      end


      def create
        user = User.create!(user_params)
        if user.valid?
          session[:user_id] = user.id
          render json: user, status: :created
        else
          render json: { error: user.errors.full_messages }, status: :unprocessable_entity
        end
      end

    def show 
        user = current_user
        if user 
        render json: user 
        else
           render_not_logged_in
        end
    end

  



    private 

    def user_params
        params.permit(:name, :password, :email, :photographer )

    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end





end
