"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: '$wordSpacing',
    description: 'Sets or returns the spacing between words when drawing text.',
    version: '1.0.0',
    aliases: ["$wordSpace"],
    brackets: false,
    unwrap: true,
    args: [
        {
            name: 'canvas',
            description: 'Name of the canvas.',
            type: forgescript_1.ArgType.String,
            required: false,
            rest: false
        },
        {
            name: 'spacing',
            description: 'The new spacing.',
            type: forgescript_1.ArgType.Number,
            required: false,
            rest: false
        }
    ],
    async execute(ctx, [name, spacing]) {
        const canvas = name
            ? ctx.canvasManager?.get(name)?.ctx
            : !name && ctx.canvasManager?.current?.length !== 0
                ? ctx.canvasManager?.current?.[ctx.canvasManager?.current?.length - 1]?.ctx : null;
        if (!canvas)
            return this.customError('No canvas');
        return this.success(spacing
            ? (canvas.wordSpacing = `${spacing}px`, undefined)
            : canvas.wordSpacing);
    }
});
//# sourceMappingURL=wordSpacing.js.map