import React from "react";
import {TaskType} from "./taskType.ts";

export interface IModal {
    isEdit: boolean;
    task?: TaskType;
}