import dynamoose from 'dynamoose'

const schema = new dynamoose.Schema(
  {
    id: {
      type: String,
      required: true,
      hashKey: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

export const User = dynamoose.model('User', schema)
