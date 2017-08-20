import { PluginEventArguments } from "../plugin-event-arguments";
import { Chat } from "../../../chat/chat";

/**
 * Leaderboard Reset Plugin Event Arguments.
 * Contains chat that has been reset.
 */
export class LeaderboardResetPluginEventArguments extends PluginEventArguments
{
  /**
   * The chat that was reset.
   * TODO: Probably don't want to expose the entire chat interface with this event...
   */
  public readonly Chat: Chat;

  /**
   * Constructor.
   * @param _chat Chat that was reset.
   */
  constructor(_chat: Chat)
  {
    super();
    this.Chat = _chat;
  }
}