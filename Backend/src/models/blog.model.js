import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, "title are required"],
    },
    mainImage: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    intro: {
      type: String,
      require: [true, "title are required"],
    },

    firstParagraphTitle: {
      type: String,
    },

    firstParagraphImage: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },

    firstParagraphDescription: {
      type: String,
    },

    secondParagraphTitle: {
      type: String,
    },

    secondParagraphImage: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    secondParagraphDescription: {
      type: String,
    },

    thirdParagraphTitle: {
      type: String,
    },

    thirdParagraphImage: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    thirdParagraphDescription: {
      type: String,
    },

    catagory: {
      type: String,
      require: true,
    },

    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const blogs = mongoose.model("blog", blogSchema);
