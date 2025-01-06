/*!
* Copyright 2002 - 2017 Webdetails, a Hitachi Vantara company.  All rights reserved.
*
* This software was developed by Webdetails and is provided under the terms
* of the Mozilla Public License, Version 2.0, or any later version. You may not use
* this file except in compliance with the license. If you need a copy of the license,
* please go to  http://mozilla.org/MPL/2.0/. The Initial Developer is Webdetails.
*
* Software distributed under the Mozilla Public License is distributed on an "AS IS"
* basis, WITHOUT WARRANTY OF ANY KIND, either express or  implied. Please refer to
* the license for the specific language governing your rights and limitations.
*/
define([
    './protovis',
    './def',
    './pvc',
    '../protovis-cgg'
], function(pv, def, pvc, pvCgg) {

    // Set the default compatibility version to CCC v1.
    pvc.defaultCompatVersion(1);

    // Install protovis CGG
    pvCgg(pv);

    return {
        pv:  pv,
        def: def,
        pvc: pvc
    };
});