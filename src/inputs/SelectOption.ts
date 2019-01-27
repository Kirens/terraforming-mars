
import { PlayerInput } from "../PlayerInput";
import { PlayerInputTypes } from "../PlayerInputTypes";
import { IProjectCard } from "../cards/IProjectCard";

export class SelectOption implements PlayerInput {
    public initiator: "card" | "board" = "card";
    public type: PlayerInputTypes = "SelectAmount";
    constructor(public card: IProjectCard, public title: string, public cb: (option: string) => void) {
    }
}
