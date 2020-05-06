import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { FeedPlaceholder } from "./feed-placeholder"

declare var module

storiesOf("FeedPlaceholder", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary.">
        <FeedPlaceholder text="FeedPlaceholder" />
      </UseCase>
    </Story>
  ))
