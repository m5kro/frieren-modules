/*
 * Project: Frieren Framework
 * Copyright (C) 2023 DSR! <xchwarze@gmail.com>
 * SPDX-License-Identifier: LGPL-3.0-or-later
 * More info at: https://github.com/xchwarze/frieren
 */
import useAuthenticatedMutation from '@src/hooks/useAuthenticatedMutation.js';
import { fetchPost } from '@src/services/fetchService.js';

const useSendCap = () => (
    useAuthenticatedMutation({
        mutationFn: ({ capture }) => fetchPost({
            module: 'wpaonlinecrack',
            action: 'sendCap',
            capture,
        }),
    })
);

export default useSendCap;
