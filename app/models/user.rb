require 'bcrypt'

class User < ActiveRecord::Base
  include BCrypt
  
  validates :email, :uniqueness => true
  
  # def self.authenticate(email, password)
  #   @user = User.find_by_email(password)
  #   p @user
  #   @user.password == password
  # end

  def password
    @password ||= Password.new(password_hash)
  end

  def password=(new_password)
    @password = Password.create(new_password)
    self.password_hash = @password
  end
end
