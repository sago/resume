class NotificationsMailer < ActionMailer::Base
  default :from => "saulgomezperez@gmail.com"
  default :to => "ing.saul.gomez18@gmail.com"

  def new_message(message)
    @message = message
    mail(:subject => "[herokuapp.resume.com] #{message.subject}")
  end

end
