/* jshint esversion: 6 */

class JsonExtension {
    getInfo() {
        return {
            id: 'scratch_json',

            name: 'JSON',

            blocks: [
                {
                    opcode: 'json_get_field',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Get field [FIELD] of [JSON]',
                    arguments: {
                        FIELD: {
                            type: Scratch.BlockType.STRING,
                            defaultValue: '',
                        },
                        JSON: {
                            type: Scratch.BlockType.STRING,
                            defaultValue: '',
                        }
                    }
                }
            ]
        };
    }

    json_get_field(args) {
        try {
            let json = JSON.parse(args.JSON);
            return String(json[args.FIELD]);
        }
        catch (err) {
            return '';
        }
    }
}
